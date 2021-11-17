import {Component} from 'react'
import {FiEdit} from 'react-icons/fi'
import {MdOutlineDeleteOutline} from 'react-icons/md'
import {AiOutlineSave} from 'react-icons/ai'
import './index.css'

class UserDetails extends Component {
  state = {
    isEditClicked: false,
    name: this.props.userDetails.name,
    email: this.props.userDetails.email,
    role: this.props.userDetails.role,
  }

  onDeleteUser = () => {
    const {userDetails, deleteUser} = this.props
    const {id} = userDetails
    deleteUser(id)
  }

  onChangeUserCheckbox = () => {
    const {userDetails, onSelectCheckbox} = this.props
    const {id} = userDetails
    onSelectCheckbox(id)
  }

  editUser = () => {
    this.setState(prevState => ({
      isEditClicked: !prevState.isEditClicked,
    }))
  }

  saveEditedDetails = () => {
    this.setState(prevState => ({
      isEditClicked: !prevState.isEditClicked,
    }))
  }

  onChangeUserName = event => {
    this.setState({name: event.target.value})
  }

  onChangeUserEmail = event => {
    this.setState({email: event.target.value})
  }

  onChangeUserRole = event => {
    this.setState({role: event.target.value})
  }

  // editing the user details
  renderEditableUserDetails = () => {
    const {userDetails} = this.props

    const {id} = userDetails
    const {name, email, role} = this.state
    return (
      <tr key={id}>
        <td className="table-row-cell ">
          <input type="checkbox" />
        </td>
        <td className="table-row-cell">
          <input type="text" value={name} onChange={this.onChangeUserName} />
        </td>
        <td className="table-row-cell">
          <input type="email" value={email} onChange={this.onChangeUserEmail} />
        </td>
        <td className="table-row-cell">
          <select value={role} onChange={this.onChangeUserRole}>
            <option>member</option>
            <option>admin</option>
          </select>
        </td>
        <td className="table-row-cell">
          <button
            type="button"
            className="button"
            onClick={this.saveEditedDetails}
          >
            <AiOutlineSave className="save-icon" />
          </button>

          <button type="button" className="button" onClick={this.onDeleteUser}>
            <MdOutlineDeleteOutline color="#e80c25" className="delete-icon" />
          </button>
        </td>
      </tr>
    )
  }

  // rendering the user details from Users List
  renderUserDetails = () => {
    const {userDetails} = this.props

    const {id, isChecked} = userDetails
    const {name, email, role} = this.state

    const changeInBackgroundColor = isChecked ? 'selected-checkbox' : ''

    return (
      <tr key={id} className={`user-row ${changeInBackgroundColor}`}>
        <td className="table-row-cell ">
          <input type="checkbox" onChange={this.onChangeUserCheckbox} />
        </td>
        <td className="table-row-cell">{name}</td>
        <td className="table-row-cell">{email}</td>
        <td className="table-row-cell">{role}</td>
        <td className="table-row-cell">
          <button type="button" className="button" onClick={this.editUser}>
            <FiEdit className="edit-icon" />
          </button>
          <button type="button" className="button" onClick={this.onDeleteUser}>
            <MdOutlineDeleteOutline className="delete-icon" />
          </button>
        </td>
      </tr>
    )
  }

  render() {
    const {isEditClicked} = this.state

    return (
      <>
        {isEditClicked
          ? this.renderEditableUserDetails()
          : this.renderUserDetails()}
      </>
    )
  }
}
export default UserDetails
