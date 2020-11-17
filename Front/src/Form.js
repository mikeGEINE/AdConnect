import React from 'react';

function Home() {
    // state ={
    //     inputText: '',
    //     textareaText: '',
    // }

    // handleInputChange = ({targer: {value}}) => {
    //     this.setState({
    //         inputText: value
    //     })
    // }

    // handleTextareaChange = ({targer: {value}}) => {
    //     this.setState({
    //         textareaText: value
    //     })
    // }
    // const {register, handleSubmit, errors} = 

    // const onSubmit = date => {
    //     console.log(date);
    // }
  return (
    <form >
        <label>
            Name:
            <input type="text" name="title" />
        </label>

        <label>
            Name:
            <input type="text" name="description"  />
        </label>
        <br />

        <input type="submit" />
    </form>
  );
}

export default Home