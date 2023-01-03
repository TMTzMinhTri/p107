import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { Button, Form, FormGroup, Input, Label } from "reactstrap"
import errorMessage from "../../common/errorMessage"
import { AuthContext } from "../../contexts/AuthContext"

const LoginPage = () => {
    const { login } = useContext(AuthContext)
    const [formValue, setFormValue] = useState({
        email: "",
        password: ""
    })
    const onChange = (e) => {
        const { name, value } = e.target
        setFormValue(prev => ({ ...prev, [name]: value }))
    }
    const onSubmit = async (e) => {
        e.preventDefault()
        const { email, password } = formValue
        try {
            await login(null, email, password)
        } catch (error) {
            const errorCode = error.errorCode
            const errMessage = errorMessage(errorCode)

        }
    }
    return <div className="my-2">
        <Form onSubmit={onSubmit}>
            <FormGroup floating>
                <Input
                    id="email"
                    name="email"
                    placeholder="Email"
                    onChange={onChange}
                    type="email"
                />
                <Label for="email">
                    Email
                </Label>
            </FormGroup>
            {' '}
            <FormGroup floating>
                <Input
                    id="password"
                    name="password"
                    onChange={onChange}
                    placeholder="Password"
                    type="password"
                />
                <Label for="password">
                    Password
                </Label>
            </FormGroup>
            <Button block color="primary">
                Login
            </Button>
        </Form>
        <div className="text-center">
            <Link to='/register'>Create new account</Link>
        </div>
    </div>
}
export default LoginPage