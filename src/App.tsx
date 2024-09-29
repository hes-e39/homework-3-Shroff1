import colors from './colors.json';

const App = () => {
    return <h1 style={{ color: `#${colors[0].hex}` }}>Hello World</h1>;
};

export default App;
