export function getContainers(pincode, data) {
  // if no pincode is provided return all data

  if (!pincode) return data;
  //TODO: Try using localstorage like hashmap to cache pincode key and object its value in backend if it exists we can send 304 status code to check if data is changed if so update hashmap in background and display stale data until then

  // keeps track of containers / widgets that needs to displayed for particular pincode that was searched
  const serviceableToPincode = [];
  
  // this array will keep track of all widgets inside a container if any one is false don't render whole container

  const isEverythingTrue = [];

  // get containers for particular pincode

  function filterContainers(object) {

    // base condition - if object is widget check if it is serviceable if so then render

    if (
      Object.hasOwnProperty.call(object, "slotType") &&
      object.slotType === "WIDGET"
    ) {
      if (Object.hasOwnProperty.call(object, "serviceablePincodes")) {
        //chceking if pincode matches input if so then add "True" to isEverythingTrue array else add "false"
        if (object.serviceablePincodes.find((pins) => pins === pincode)) {
          return true;
        } else return false;
        // if "serviceablePincodes" property doesn't exist return true
      } else {
        return true;
      }
    }
      // Recursive Call -- If object is container loop through container's children array keep on doing so until we get widget once we get widget return  
    else {

      for (let child = 0; child < object.children.length; child++) {
        isEverythingTrue.push(
          filterContainers(object.children[child], pincode, "callFromChild", object)
        );
      }
      //if everything is true return true meaning that the particular object can be displayed
      if (isEverythingTrue.every((element) => element === true)) {
        return true;
      } else {
        return false;
      }
    }
  }

  data.forEach((object) => {
    if (filterContainers(object, pincode)) {
      serviceableToPincode.push(object);
    }
  });

  return serviceableToPincode;
}
