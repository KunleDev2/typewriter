const sentence = "hello there from lighthouse labs"  + '\n';
let initTimer = 0;

for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, initTimer);

  initTimer = initTimer + 1000;
};