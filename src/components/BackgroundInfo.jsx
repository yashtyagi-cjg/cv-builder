import PropTypes from 'prop-types';

export default function Background({backgroundInfo, onChange}){
    // const firstName = backgroundInfo.firstName;
    // const lastName = backgroundInfo.lastName;
    // const title = backgroundInfo.title;
    // const address = backgroundInfo.address;
    // const description = backgroundInfo.description;
    function handleSubmit(event){

        event.preventDefault()

        if (typeof onChange === 'function') {
            onChange(event);
          }

        console.log("abcd")
    }
    return(
        <form
        onSubmit={onChange}>
            <input type="text" placeholder="University"></input>
            <input type="text" placeholder="Course"></input>
            <input type="number" placeholder="GPA"></input>
            <label>Start Date<input type="date" placeholder="Start Date"></input></label>
            <input type="textarea" placeholder="Description"></input>
            <button type="submit">Submit</button>
        </form>
    )

}



Background.propTypes = {
    onChange: PropTypes.func.isRequired,
  };