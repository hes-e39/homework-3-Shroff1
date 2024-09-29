import colors from './colors.json';

const App = () => {
    return <h1 style={{ color: `#${colors[15].hex}`, backgroundColor: `#${colors[13].hex}` }}>Hello World</h1>;
};

export default App;
