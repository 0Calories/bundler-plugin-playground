export function TestComponent() {
  return (
    <>
      <div>This is a test component</div>
      <ErrorGenerationButton />
    </>
  );
}

function ErrorGenerationButton() {
  return (
    <button
      onClick={() => {
        throw new Error('Error!!!!');
      }}
    ></button>
  );
}
