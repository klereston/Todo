let isTransactionFinished: any;

export default class Debounce {

  startDebounce = () => {
    new Promise((resolve, _rejects)=>{
      //Simulate a user click or interaction with the Prompit
        //message: 'Want to click to start the app (y/N)' !!True!!
      resolve(true)
    })
    .then((message) => {
        if(message === true ){
            //console.log('Waiting transaction...');
            startAndWaitTransaction();
            return this.goToPage();
        }
        //console.log(message.name);
    })
    .catch((error) => {
        console.log(error);
    });
}

  
    goToPage = () => {
      new Promise((resolve, _rejects) => {
        //Simulate a user click or interaction with the Prompit
        //message: 'Want to click to go to other page? (y/N)' !!True!!
        resolve(true)
      })
      .then((message) => {
          if(message === true){
              if(isTransactionFinished === true){
                return "transaction finished. Go to Other page!!! ";
              } else {
                return "you have to wait transation to finish";
              }
          }
      })
      .catch((error) => {
          console.log(error);
      });
    }

}


const startTransaction = () => {
  return new Promise((resolve, _rejects) => {
       setTimeout(() => {
           resolve(true)
       }, 5000);
   });
};

async function startAndWaitTransaction() {
  isTransactionFinished = await startTransaction();
  
}