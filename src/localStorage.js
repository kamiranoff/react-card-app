class LocalStorage {
  static get(){
    return JSON.parse(localStorage.getItem('state')) || undefined;
  }
  static set(state,props){
    let toSave = {};
    props.forEach(prop => {

      toSave[prop] = state[prop]
      console.log('toSave[prop]',toSave[prop]);
    });

    localStorage.setItem('state',JSON.stringify(toSave));
  };
}

export default LocalStorage;
