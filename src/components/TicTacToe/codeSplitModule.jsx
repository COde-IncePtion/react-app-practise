
const temp = import('./codeSplitTesting');
const CodeSplitModule = () => <h3>Hello from CodeSplitModule</h3>;
temp.then(res=> res.default());
export default  CodeSplitModule;
