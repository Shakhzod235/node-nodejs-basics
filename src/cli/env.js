const parseEnv = () => {
  const envVariables = Object.keys(process.env).filter((key) =>
    key.startsWith("RSS_")
  );
  const res = envVariables
    .map((varName) => `${varName}=${process.env[varName]}`)
    .join("; ");
  console.log(res);
};

parseEnv();
