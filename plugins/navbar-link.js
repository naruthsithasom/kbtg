export default (context, inject) => {
  const hello = (msg) => console.log(`Hello ${msg}!`);
  // Inject $hello(msg) in Vue, context and store.
  inject("hello", hello);
  
  context.$hello = hello;
};
