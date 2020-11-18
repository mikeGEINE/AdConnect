import React from 'react';

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: '',
                  description: ''};


    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value =  target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    alert('Отправленное заголовок: ' + this.state.title + '\nОтправленное описание: ' + this.state.description);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} >
          <label>
              Введите заголовок рекламы:
              <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
          </label>
          <br />
          <label>
              Введите подробное описание рекламы:
              <input type="text" name="description" value={this.state.description} onChange={this.handleChange} />
          </label>
          <br />

          <input type="submit" />
      </form>
    );
  }
}

export default NameForm;

