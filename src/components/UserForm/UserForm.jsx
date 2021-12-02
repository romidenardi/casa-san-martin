import {useCartContext} from '../../context/CartContext';
import './UserForm.css';

const UserForm = ({createOrder}) =>{

    const {handleForm, userData} = useCartContext();

    return (
        <form 
            
            onChange={handleForm} 
            
            onSubmit={(e) => {

                e.preventDefault()

                userData.email === userData.emailvalidation
                ? createOrder()
                : alert("Los correos electrónicos ingresados no son iguales. Intentalo nuevamente")
                }
            }
        >

            <legend className="form-legend">Ingresá tus datos</legend>
            <div>
                <label htmlFor="name" className="form-label">Nombre</label>
                <input type="text" name="name" placeholder="Juan" defaultValue={userData.name} required/>
            </div>
            <div>
                <label htmlFor="surname" className="form-label">Apellido</label>
                <input type="text" name="surname" placeholder="Pérez" defaultValue={userData.surname} required/>
            </div>
            <div>
                <label htmlFor="phone" className="form-label">Teléfono</label>
                <input type="text" name="phone" placeholder="3492123456" defaultValue={userData.phone} required/> 
                <p>Ingresá tu número de celular con el código de área, sin el 0 ni el 15.</p>
            </div>
            <div>
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" name="email" placeholder="ejemplo@tuemail.com" defaultValue={userData.email} required/>
            </div>
            <div>
                <label htmlFor="emailvalidation" className="form-label">Validá tu Email</label>
                <input type="email" name="emailvalidation" placeholder="ejemplo@tuemail.com" defaultValue={userData.emailvalidation} required/>
            </div>
            <button type="submit" className="buy-buttom">¡Comprar!</button>
        </form>
    )
}

export default UserForm