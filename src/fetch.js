export default async (segment, initConfig) => {
  // console.log("segment", process.env.REACT_APP_BASE_URL + segment)
  // console.log("segment",initConfig)
  const getUser = await localStorage.getItem("user");
  const config = {
    ...initConfig,
    headers: {
      Accept:
        "application/json,application/pdf,application/octet-stream,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "content-type": "application/json",
      Authorization: getUser === null ? "null" : getUser,
    },
  };

  try {
    return await fetch(process.env.REACT_APP_BASE_URL + segment, config);
  } catch (error) {
    return error;
  }
};
