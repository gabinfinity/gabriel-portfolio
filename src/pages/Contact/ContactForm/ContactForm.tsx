import React, { useState } from "react";
import { FormInput, FormArea, FormField, FormTextArea, FormStatus } from "./ContactForm.styles";
import MainButton from "../../../components/MainButton/MainButton";
import PersonIcon from "../../../components/svgs/PersonIcon";
import EmailIcon from "../../../components/svgs/EmailIcon";
import PencilIcon from "../../../components/svgs/PencilIcon";

const FORM_ENDPOINT = "https://public.herotofu.com/v1/1206f1b0-8d27-11ee-be70-ff6792ba211a";

function useContactForm() {
    const [status, setStatus] = useState<string>();

    const handleFormSubmit: React.FormEventHandler = (e) => {
        e.preventDefault();
        const form = e.currentTarget as HTMLFormElement;

        const injectedData: Record<string, string | number> = {

        };

        const inputs = Array.from(form.elements) as HTMLFormElement[];
        const data = inputs
            .filter((input) => input.name)
            .reduce((obj, input) => Object.assign(obj, { [input.name]: input.value }), {} as Record<string, string>);

        Object.assign(data, injectedData);

        fetch(FORM_ENDPOINT, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => {
                if (response.status === 422) {
                    Object.keys(injectedData).forEach((key) => {
                        const el = document.createElement('input');
                        el.type = 'hidden';
                        el.name = key;
                        el.value = injectedData[key].toString();

                        form.appendChild(el);
                    });

                    form.setAttribute('target', '_blank');
                    form.submit();

                    throw new Error('Please finish the captcha challenge');
                }

                if (response.status !== 200) {
                    throw new Error(response.statusText);
                }

                return response.json();
            })
            .then(() => setStatus("We'll be in touch soon."))
            .catch((err) => setStatus(err.toString()));
    };

    return { status, handleFormSubmit };
}

export function ContactForm() {
    const { status, handleFormSubmit } = useContactForm();

    if (status) {
        return (
            <FormStatus> 
                <h1>Contact form submitted successfully!</h1>
                <h6>Will be in touch shortly. Thank you.</h6>
            </FormStatus>
        );
    }

    return (
        <FormArea>
            <form method="POST" action={FORM_ENDPOINT} onSubmit={handleFormSubmit}>
                <FormField>
                    <FormInput type="text" placeholder="Your name" name="name" required />
                    <label>
                        <PersonIcon />
                    </label>
                </FormField>
                <FormField>
                    <FormInput type="email" placeholder="Email" name="email" required />
                    <label>
                        <EmailIcon />
                    </label>
                </FormField>
                <FormField>
                    <FormTextArea placeholder="Your message" name="message" required />
                    <label>
                        <PencilIcon />
                    </label>
                </FormField>
                <div>
                    <MainButton to="" buttonText="Send a message"/>
                </div>
            </form>
        </FormArea>
    );
};
