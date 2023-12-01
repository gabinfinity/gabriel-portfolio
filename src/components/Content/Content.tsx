import { Outlet } from 'react-router-dom';import { ContentMainContainer } from './Content.styles';

export default function Content() {
  return (
    <ContentMainContainer>
      <Outlet />
    </ContentMainContainer>
  );
}