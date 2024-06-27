export default function Tabs({ buttons, children, ButtonContainer, ...props }) {
  return (
    <>
      <ButtonContainer {...props}> {buttons}</ButtonContainer>
      {children}
    </>
  );
}
