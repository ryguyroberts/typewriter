const sentence = "hello there from lighthouse labs";
let interval = 0;
// Output each change and increase time increment for delay
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, interval);
  interval += 50;
}
// Output a new line at the last interval 
setTimeout(() => {
  process.stdout.write("\n");
}, interval);
