const parseEnv = () => {
    const entries = Object.entries(process.env);
    const values = entries.filter((el) => el[0].startsWith('RSS_'))
    const [first, second] = values;

    console.log(`${first[0]}=${first[1]}; ${second[0]}=${second[1]}`);
};

parseEnv();