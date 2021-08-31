
const APIConfig = (methodType, endpoint, data) => {
  var config = {
    method: methodType,
    url: `ss}${endpoint}`,
    headers: {
      'APP_KEY': `${process.env.React_App_ACCESS_TOKEN}`  
    },
    data: data
  };

  return config;
};

export default APIConfig