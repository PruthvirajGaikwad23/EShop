import styles from "./LoginPage.module.css";

const LoginPage = () => {
    const initialValues = {
        email: "",
        password: ""
    };

    const onSubmit = (values) => {
        console.log(values);
    }

    const validationSchema = Yup.object({
        email: Yup.string().email("Invalid email address").required("Email is required"),
        password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required")
    });

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema,
        validateOnMount: true,
    });

    return (
        <div className="container">
            <div className={styles.wrapper}>
                    <h2>Login</h2>
                    <hr />
                    <form onSubmit={formik.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" className={styles.formControl} id="email" placeholder="Enter email" {...formik.getFieldProps("email")} />
                            {formik.touched.email && formik.errors.email ? (
                                <div className={styles.error}>{formik.errors.email}</div>
                            ) : null}
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" className={styles.formControl} id="password" placeholder="Enter password" {...formik.getFieldProps("password")} />
                            {formik.touched.password && formik.errors.password ? (
                                <div className={styles.error}>{formik.errors.password}</div>
                            ) : null}
                        </div>
                        <button type="submit" className="btn btn-primary btn-block" disabled={!formik.isValid}>Login</button>
                    </form>
                    <p className="text-center">
                    Don't have an account? <a href="/register">Register</a>
                </p>
            </div>
        </div>
    );
}