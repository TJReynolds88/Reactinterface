import React, { Component } from 'react';
import { FaTimes } from 'react-icons/fa';

class ListAppointments extends Component {
  render() {
    return (
      <div className="appointment-list item-list mb-3">
        {this.props.appointments.map(item => (
          <div className="pet-item col media py-3" key={item.aptId}>
            <div className="mr-3">
              <button className="pet-delete btn btn-sm btn-danger"
                onClick={() => this.props.deleteAppointment(item)}><FaTimes />
              </button>
            </div>

            <div className="pet-info media-body">
              <div className="pet-head d-flex">
                <span className="pet-name"
                  contentEditable
                  suppressContentEditableWarning
                  onBlur={
                    e => this.props.updateInfo('petName', e.target.innerHTML, item.aptId)
                  }
                >
                  {item.petName}</span>
                <span className="apt-date ml-auto">{item.aptDate}</span>
              </div>

              <div className="owner-name"
                contentEditable
                suppressContentEditableWarning
                onBlur={
                  e => this.props.updateInfo('ownerName', e.target.innerHTML, item.aptId)
                }
              >
                <span className="label-item">Owner: </span>
                <span>{item.ownerName}</span>
              </div>
              <div className="apt-notes"
                contentEditable
                suppressContentEditableWarning
                onBlur={
                  e => this.props.updateInfo('aptNotes', e.target.innerHTML, item.aptId)
                }
              >{item.aptNotes}</div>
            </div>
          </div>

        ))}

      </div>
    );
  }
}

export default ListAppointments;
