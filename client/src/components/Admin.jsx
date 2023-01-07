import React, { useState, useRef, useEffect } from 'react';
import './admin.css'
import Heading from "./Heading"
import { teamData } from './teamData.js'
import { list3 } from "../data.js"
import { list } from "../data.js"
import "./team.css"
import cover from "../images/customer/team-1.jpg"
import cover2 from '../images/list/p-5.png'
import cover3 from '../images/list/p-2.png'
import { useCookies } from 'react-cookie';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { MdDriveFolderUpload } from 'react-icons/md'

function Admin() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = (id) => {
        setContract(contributers.find((item) => item._id === id));
        setShow(true);
    }

    const [contract, setContract] = useState({})

    const [currentUser, setCurrentUser] = useState({})
    const [file, setFile] = useState("");
    const category = "For Sale"
    const category2 = "For Rent"
    const [addCont, setAddCont] = useState(false)
    const [addProp, setAddProp] = useState(false)
    const [addProp2, setAddProp2] = useState(false)
    const [buy, setBuy] = useState(list)
    const [rent, setRent] = useState(list3)
    const nameRef = useRef();
    const addressRef = useRef();
    const listRef = useRef();
    const updatenameRef = useRef();
    const updateaddressRef = useRef();
    const updatelistRef = useRef();
    const priceRef = useRef();
    const typeRef = useRef();
    const url = 'http://localhost:5000';
    const history = useHistory()
    // eslint-disable-next-line
    const [cookies, setCookie, removeCookie] = useCookies(['userToken']);
    const [contributers, setcontributers] = useState([])
    useEffect(() => {
        const getAllContractors = async () => {
            await axios.get(`${url}/api/getContractors`, {
                headers: {
                    'userToken': cookies.userToken
                }
            }).then(res => {
                setcontributers(res.data.contractors)
            }
            ).catch(err => {
                alert(err)
            }
            )
        }
        getAllContractors()

        axios.get(`${url}/api/profile`, {
            headers: {
                'userToken': cookies.userToken
            }
        }).then(res => {
            setCurrentUser(res.data);
        }
        ).catch(err => {
            history.push('/login')
        }
        )
        // eslint-disable-next-line
    }, [contributers])
    const addNew = async () => {
        const data = {
            name: nameRef.current.value,
            office: addressRef.current.value,
            inseptions: listRef.current.value,
        }
        if (file) {
            const dataa = new FormData();
            const filename = Date.now() + file.name;
            dataa.append("name", filename);
            dataa.append("file", file);
            data.image = filename;
            try {
                await fetch(`${url}/api/upload`, {
                    method: "POST",
                    body: dataa
                });
            } catch (err) {
                alert(err);
            }
        }
        await axios.post(`${url}/api/addContractor`, data,
            {
                headers: {
                    'userToken': cookies.userToken
                }
            }
        )
            .then(res => {
                alert(res.data.msg)
                setAddCont(false)
            })
            .catch(err => {
                alert(err)
            })


        // setcontributers([...contributers, { id: Date.now(), name: nameRef.current.value, address: addressRef.current.value, list: listRef.current.value }]);
    }

    const addNew1 = () => {
        setRent([...rent, { id: Date.now(), name: nameRef.current.value, location: addressRef.current.value, price: priceRef.current.value, type: typeRef.current.value }]);
        alert("New Property Added Successfully")
        setAddProp(false)
    }

    const addNew2 = () => {
        setBuy([...buy, { id: Date.now(), name: nameRef.current.value, location: addressRef.current.value, price: priceRef.current.value, type: typeRef.current.value }]);
        alert("New Property Added Successfully")
        setAddProp2(false)
    }
    const handleUpdate = async () => {
        const id = contract._id;
        const data = {
            name: updatenameRef.current.value,
            office: updateaddressRef.current.value,
            inseptions: updatelistRef.current.value,
        }
        if (file) {
            const dataa = new FormData();
            const filename = Date.now() + file.name;
            dataa.append("name", filename);
            dataa.append("file", file);
            data.image = filename;
            try {
                await fetch(`${url}/api/upload`, {
                    method: "POST",
                    body: dataa
                });
            } catch (err) {
                alert(err);
            }
        }
        await axios.put(`${url}/api/updateContractor/${id}`, data,
            {
                headers: {
                    'userToken': cookies.userToken
                }
            }
        )
            .then(res => {
                alert(res.data.msg)
                setShow(false)
            })
            .catch(err => {
                alert(err.response.data.msg)
            })
    }
    const handleDelete = async (id) => {
        //delete contractor
        await axios.delete(`${url}/api/deleteContractor/${id}`, {
            headers: {
                'userToken': cookies.userToken
            }
        })
            .then(res => {
                alert(res.data.msg)
            })
            .catch(err => {
                alert(err)
            })
        setcontributers(contributers.filter((task) => task._id !== id));
        alert("Contractor Deleted Successfully")
    }
    const handleDelete2 = (id) => {
        setBuy(buy.filter((task) => task.id !== id));
        alert("Property Deleted Successfully")
    }
    const handleDelete3 = (id) => {
        setRent(rent.filter((task) => task.id !== id));
        alert("Property Deleted Successfully")
    }
    return (
        <div className='container'>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Update Contractor {contract.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='row'>
                        <div class="col-md-4 mb-3">
                            <label class="form-label">Name</label>
                            <input value={contract.name} type="text" class="form-control" />
                        </div>
                        <div class="col-md-4 mb-3">
                            <label class="form-label">Office Address</label>
                            <input value={contract.office} type="text" class="form-control" />
                        </div>
                        <div class="col-md-4 mb-3">
                            <label class="form-label">Total Insecptions</label>
                            <input value={contract.inseptions} type="number" class="form-control" />
                        </div>

                        <div class="col-md-3 mb-3">
                            <label class="form-label">Name</label>
                            <input ref={updatenameRef} type="text" class="form-control" />
                        </div>
                        <div class="col-md-3 mb-3">
                            <label class="form-label">Office Address</label>
                            <input ref={updateaddressRef} type="text" class="form-control" />
                        </div>
                        <div class="col-md-3 mb-3">
                            <label class="form-label">Total Insecptions</label>
                            <input ref={updatelistRef} type="number" class="form-control" />
                        </div>
                        <div class="col-md-3 mb-3">
                            <img
                                src={
                                    file
                                        ? URL.createObjectURL(file)
                                        : `${url}/images/${contract.image}`
                                }
                                alt=""
                            />
                            <label htmlFor="file">
                                Image: <MdDriveFolderUpload size={30} style={{ cursor: "pointer" }} className="icon" />
                            </label>
                            <input
                                type="file"
                                id="file"
                                onChange={(e) => setFile(e.target.files[0])}
                                style={{ display: "none" }}
                            />
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button onClick={() => { handleUpdate() }} variant="primary">Update</Button>
                </Modal.Footer>
            </Modal>
            <div className="Contractors">
                <div className="d-flex justify-content-between">
                    <h1>All Contributors</h1>
                    <div onClick={() => { setAddCont(true) }} className="addBtn1"> <i class='fa-brands fa-add'></i> Add New Contractors</div>
                </div>
                {addCont &&
                    <div className='row'>
                        <h3 className='text-center'>Add New Contractor</h3>
                        <div class="col-md-3 mb-3">
                            <label class="form-label">Name</label>
                            <input ref={nameRef} type="text" class="form-control" />
                        </div>
                        <div class="col-md-3 mb-3">
                            <label class="form-label">Office Address</label>
                            <input ref={addressRef} type="text" class="form-control" />
                        </div>
                        <div class="col-md-3 mb-3">
                            <label class="form-label">Total Insecptions</label>
                            <input ref={listRef} type="number" class="form-control" />
                        </div>
                        <div class="col-md-3 mb-3">
                            <img
                                src={
                                    file
                                        ? URL.createObjectURL(file)
                                        : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                                }
                                alt=""
                            />
                            <label htmlFor="file">
                                Image: <MdDriveFolderUpload size={30} style={{ cursor: "pointer" }} className="icon" />
                            </label>
                            <input
                                type="file"
                                id="file"
                                onChange={(e) => setFile(e.target.files[0])}
                                style={{ display: "none" }}
                            />
                        </div>
                        <div class="col-md-3 mb-3">
                            <button onClick={() => { addNew() }}>Add</button>
                        </div>
                    </div>}
                <section className='team background2'>
                    <div className='container'>
                        <Heading title='Our Agents' subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.' />

                        <div className='content mtop grid3'>
                            {contributers.map((val, index) => (
                                <div className='box' key={index}>
                                    <button className='btn3'>{val.inseptions} Inspections</button>
                                    <div className='details'>
                                        <div className='img'>
                                            <img src={`${url}/images/${val.image}`} alt='' />
                                            <i className='fa-solid fa-circle-check'></i>
                                        </div>
                                        <i className='fa fa-location-dot'></i>
                                        <label>{val.office}</label>
                                        <h4>{val.name}</h4>

                                        <span className="fw-bold">Offie Address:</span>  <label>{val.office}</label>
                                        <div className='button flex'>
                                            <button onClick={() => { handleDelete(val._id) }}>
                                                <i className='fa fa-trash'></i>
                                                Delete
                                            </button>
                                            <button onClick={() => { handleShow(val._id) }} className='btn4'>
                                                <i className='fa fa-edit'></i>
                                                Edit
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
            <div className="ForRent">
                <div className="d-flex justify-content-between">
                    <h1>Property Available for Rent</h1>
                    <div onClick={() => { setAddProp(true) }} className="addBtn3"> <i class='fa-brands fa-add'></i> Add New Property</div>
                </div>
                {addProp &&
                    <div className='row'>
                        <h3 className='text-center'>Add New Property</h3>
                        <div class="col-md-3 mb-3">
                            <label class="form-label">Name</label>
                            <input ref={nameRef} type="text" class="form-control" />
                        </div>
                        <div class="col-md-3 mb-3">
                            <label class="form-label">Location</label>
                            <input ref={addressRef} type="text" class="form-control" />
                        </div>
                        <div class="col-md-3 mb-3">
                            <label class="form-label">Type</label>
                            <input ref={typeRef} type="text" class="form-control" />
                        </div>
                        <div class="col-md-3 mb-3">
                            <label class="form-label">Price</label>
                            <input ref={priceRef} type="text" class="form-control" />
                        </div>
                        <div class="col-md-3 mb-3">
                            <button onClick={() => { addNew1() }}>Add</button>
                        </div>
                    </div>}
                <div className="h1 text-center">Available For Rent</div>
                <div className='content grid3 mtop'>
                    {rent.map((val, index) => {
                        const { location, name, price, type } = val
                        return (
                            <div className='box pading shadow' key={index}>
                                <div className='img'>
                                    <img src={cover2} alt='' />
                                </div>
                                <div className='text'>
                                    <div className='category flex'>
                                        <span style={{ background: "#ff9800" }}>{category2}</span>
                                        <i className='fa fa-heart'></i>
                                    </div>
                                    <h4>{name}</h4>
                                    <p>
                                        <i className='fa fa-location-dot'></i> {location}
                                    </p>
                                </div>
                                <div className='button flex'>
                                    <div>
                                        <button className='btn2'>{price}</button> <label htmlFor=''>/sqft</label>
                                    </div>
                                    <span>{type}</span>
                                </div>
                                <div className=' mt-5 button flex'>
                                    <button onClick={() => { handleDelete3(val.id) }}>
                                        <i className='fa fa-trash'></i>
                                        Delete
                                    </button>
                                    <button className='btn4'>
                                        <i className='fa fa-edit'></i>
                                        Edit
                                    </button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="ForSale mt-5">
                <div className="d-flex justify-content-between">
                    <h1>Property Available for Sale</h1>
                    <div onClick={() => { setAddProp2(true) }} className="addBtn2"> <i class='fa-brands fa-add'></i> Add New Property</div>
                </div>
                {addProp2 &&
                    <div className='row'>
                        <h3 className='text-center'>Add New Property</h3>
                        <div class="col-md-3 mb-3">
                            <label class="form-label">Name</label>
                            <input ref={nameRef} type="text" class="form-control" />
                        </div>
                        <div class="col-md-3 mb-3">
                            <label class="form-label">Location</label>
                            <input ref={addressRef} type="text" class="form-control" />
                        </div>
                        <div class="col-md-3 mb-3">
                            <label class="form-label">Type</label>
                            <input ref={typeRef} type="text" class="form-control" />
                        </div>
                        <div class="col-md-3 mb-3">
                            <label class="form-label">Price</label>
                            <input ref={priceRef} type="text" class="form-control" />
                        </div>
                        <div class="col-md-3 mb-3">
                            <button onClick={() => { addNew2() }}>Add</button>
                        </div>
                    </div>}
                <div className='content grid3 mtop'>
                    {buy.map((val, index) => {
                        const { location, name, price, type } = val
                        return (
                            <div className='box pading shadow' key={index}>
                                <div className='img'>
                                    <img src={cover3} alt='' />
                                </div>
                                <div className='text'>
                                    <div className='category flex'>
                                        <span style={{ background: "#ff9800" }}>{category}</span>
                                        <i className='fa fa-heart'></i>
                                    </div>
                                    <h4>{name}</h4>
                                    <p>
                                        <i className='fa fa-location-dot'></i> {location}
                                    </p>
                                </div>
                                <div className='button flex'>
                                    <div>
                                        <button className='btn2'>{price}</button> <label htmlFor=''>/sqft</label>
                                    </div>
                                    <span>{type}</span>
                                </div>
                                <div className=' mt-5 button flex'>
                                    <button onClick={() => { handleDelete2(val.id) }}>
                                        <i className='fa fa-trash'></i>
                                        Delete
                                    </button>
                                    <button className='btn4'>
                                        <i className='fa fa-edit'></i>
                                        Edit
                                    </button>
                                </div>
                            </div>
                        )
                    })}
                </div>

            </div>
        </div>
    )
}

export default Admin