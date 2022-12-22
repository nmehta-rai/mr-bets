import React, { useEffect, useState } from 'react'

import {
  CAvatar,
  CCard,
  CCardBody,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'

import CIcon from '@coreui/icons-react'
import { cilPeople } from '@coreui/icons'
import './style.css'

import { Api } from 'src/Api'
import editBtn from 'src/assets/images/userManagement/edit.png'
import picPlaceholder from 'src/assets/images/userManagement/profilePic.png'
import { Link } from 'react-router-dom'

const UserManagement = () => {
  const [users, setUsers] = useState([])
  const getAllUsers = async () => {
    let _users = await Api.getAllUsers()
    setUsers(_users.data.data.rows)
    console.log(_users.data.data.rows)
  }
  useEffect(() => {
    getAllUsers()
  }, [])

  return (
    <>
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardBody>
              <br />
              <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead color="light">
                  <CTableRow>
                    <CTableHeaderCell className="text-center">
                      <CIcon icon={cilPeople} />
                    </CTableHeaderCell>
                    <CTableHeaderCell className="text-center">User</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Email</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Edit</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {users.map((item, index) => (
                    <CTableRow v-for="item in tableItems" key={index}>
                      <CTableDataCell className="text-center">
                        <CAvatar
                          size="md"
                          src={!item.ProfilePic ? picPlaceholder : item.ProfilePic}
                        />
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <div>{`${item.FirstName} ${item.LastName}`}</div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <div>{item.Email}</div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <div>
                          <Link to={`edituser/${item.UID_PK}`}>
                            <img src={editBtn} alt="edit-user-button" className="edit-button" />
                          </Link>
                        </div>
                      </CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default UserManagement
