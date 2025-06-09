import { Button, Hierarchy, SubVariant } from '@nx-repo/design-system';

export function App() {
  return (
    <div>
      <h1>
        <span> Hello there, </span>
        Welcome scrutiny-report 👋
      </h1>
      <Button
        hierarchy={Hierarchy.Primary}
        size={'Small'}
        subVariant={SubVariant.Primary}
      >
        {'Button'}
      </Button>
    </div>
  );
}

export default App;
