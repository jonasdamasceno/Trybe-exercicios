import React from "react";
import PropTypes from "prop-types";

class Form extends React.Component {
  render () {

    const { documentId } = this.props;

    return (
      <form> 
        <fieldset>
          Name:
          <input 
            type="text" 
            name="name" 
            placeholder="Name"
            maxLength={40}
            size='40' 
          />

          email:
          <input htmlFor="email"
            type="email"
            name="email"
            placeholder="Email"
            maxLength={50}
            size='40'
          />

        <input 
          type="text"
          maxLength='14'
          name='documentId'
          placeholder='CPF'
          value={documentId}
        />

        <input
          type="text"
          placeholder='endereço'
          maxLength={200}
          size='40'
          />
        </fieldset>
      </form>
    )
  }
}

Form.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  documentId: PropTypes.string.isRequired,
  endereco: PropTypes.string.isRequired,

}

export default Form;