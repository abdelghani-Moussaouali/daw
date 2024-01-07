// Patient.js
import React, { useState , useEffect} from 'react';
import TopBar from '../TopBar';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { data } from '../User/Data_user';
import { FaUserPlus ,FaFacebookMessenger} from "react-icons/fa";
import UserForm from '../User/UserForm';
import { FaUserCircle } from "react-icons/fa";
import Swal from "sweetalert2";
import Score from "./Score";


const Static = () => {
  const [contacts, setContacts] = useState(data);
  const [search, setSearch] = useState('');
  const [showUserForm, setShowUserForm] = useState(false);
  const [selectedUser, setSelectedUser] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const resolvedData = await data;
        const filteredData = resolvedData.filter((e) => !e.is_staff);
        setFilteredData(filteredData.sort((a, b) =>
          a.username.localeCompare(b.username)
        ));
      } catch (error) {
        console.error('Error fetching and filtering user data:', error);
      }
    };

    fetchData();
  }, []);

  const handleShowUserForm = (user) => {
   setSelectedUser(user)
   console.log(selectedUser);
    //here selectuser doesn't  updated why ?
   
    setShowUserForm(true);
    console.log(showUserForm);
  };
  
  function message (username){ 
   return <div>
    
   </div>
  }

  const handleHideUserForm = () => {
    setShowUserForm(false);
    setSelectedUser(null);
  };

  const handleSaveUser = (userData) => {
    // Implement logic to save or update user data
    // For simplicity, just log the data for now
    console.log('User data:', userData);
    handleHideUserForm();
  };

  return (
    <div className='p-0'>
      <TopBar />
      <>
        <div>
          <Container>
            <div className="d-flex justify-content-between my-4">
              <h1 className='text-center '>My Patients</h1>
              <Button
                className='d-flex align-items-center new_patents'
                onClick={() => handleShowUserForm(null)}
              >
                Create New <FaUserPlus className='ms-3 fs-3' />
              </Button>
            </div>
            <Form>
              <InputGroup className='my-3'>
                {/* onChange for search */}
                <Form.Control
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder='Search contacts'
                  className='p-2 px-4 fs-5 rounded-2 '
                />
              </InputGroup>
            </Form>
            <Table striped bordered hover>
              <thead className='mb-3 text-center'>
                <tr>
                  <th className='fs-5'>#</th>
                  <th className=''>Photo</th>
                  <th>Username</th>
                  <th>Email</th>
                 
                  <th>score</th>
                  <th>chat</th>
                </tr>
              </thead>
              <tbody className='text-center'>
                {filteredData
                  .filter((item) => {
                    return search.toLowerCase() === ''
                      ? item
                      : item.username.toLowerCase().includes(search);
                  })
                  .map((item, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td className=''><FaUserCircle className='fs-3 text-center'/></td>
                      <td>{item.username}</td>
                      <td>{item.email}</td>
                      
                      <td><div>{item.score} %</div></td>
                      <td className="" onClick={message}>
                        <FaFacebookMessenger className="fs-3 text-center" />
                      </td>
                    </tr>
                  ))}
              </tbody>
            </Table>
          </Container>
        </div>
      </>

      <UserForm
        show={showUserForm}
        handleClose={handleHideUserForm}
        onSave={handleSaveUser}
        user={selectedUser}
      />
      
    </div>
  );
}

export default Static;
