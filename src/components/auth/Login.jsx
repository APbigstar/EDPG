import { useState } from 'react';
import { loginFields } from "../../dummydata";
import Input from "./Input";
import { Link } from 'react-router-dom';

const fields = loginFields;
let fieldsState = {};
fields.forEach(field => fieldsState[field.id] = '');

export default function Login() {
    const [loginState, setLoginState] = useState(fieldsState);

    const handleChange = (e) => {
        setLoginState({ ...loginState, [e.target.id]: e.target.value })
    }


    return (
        <form className="space-y-6 w-1/5">
            <div className="-space-y-px">
                {
                    fields.map(field =>
                        <Input
                            key={field.id}
                            handleChange={handleChange}
                            value={loginState[field.id]}
                            labelText={field.labelText}
                            labelFor={field.labelFor}
                            id={field.id}
                            name={field.name}
                            type={field.type}
                            isRequired={field.isRequired}
                            placeholder={field.placeholder}
                        />

                    )
                }
            </div>
            <div className="action-btns flex items-center justify-around">
                <button className="hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" style={{ background: '#1eb2a6' }}>
                    Login
                </button>
                <Link to="/">
                    <button className="hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" style={{ background: '#1eb2a6' }}>
                        Cancel
                    </button>
                </Link>
            </div>
        </form>
    )
}