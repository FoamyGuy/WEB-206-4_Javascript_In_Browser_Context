function hello() {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve('I am adam.');
    }, 2000);
  });
}


async function async_msg() {
  try {
    let msg = await hello();
    console.log(msg);
  }
  catch(e) {
    console.log('Error!', e);
  }
}





async_msg(); //output - I am adam.