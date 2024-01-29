const parseArgs = () => {
  const args = process.argv.slice(2);
  const res = [];

  for (let i = 0; i < args.length; i += 2) {
    const propName = args[i].replace("--", "");
    const propValue = args[i + 1];
    res.push(`${propName} ${propValue}`);
  }

  console.log(res.join(", "));
};

parseArgs();
