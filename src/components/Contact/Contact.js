import React from 'react';

const Contact = () => {
    return (
        <div>
            <form
                name="contact v1"
                method="post"
                data-netlify="true"
                onSubmit="submit"
            >
                <input type="hidden" name="form-name" value="contact v1" />
                <div>
                    <label>First Name<br />
                        <input type="text" name="first-name" />
                    </label>
                </div>
                <div>
                    <label htmlFor="email">Email</label><br />
                    <input id="email" type="email" name="email" />
                </div>
                <div>
                    <label>Comments<br />
                    <textarea name="comments"></textarea>
                    </label>
                </div>
                <button type="submit">Submit The Results</button>
            </form>
        </div>
    );
};

export default Contact;