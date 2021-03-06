import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10);

let AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="newPostText" component={Textarea} placeholder="Post message"
                       validate={[required, maxLength10]}/>
            </div>
            <div>
                <button>Добавить запись</button>
            </div>
        </form>
    )
}

AddNewPostForm = reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm);

const MyPosts = React.memo(props => {
    let postsElements = [...props.posts]
        .reverse()
        .map(post => <Post key={post.id} message={post.message} likesCount={post.likesCount}/>);

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={s.postsBlock}>
            { props.isOwner
                ? <div>
                    <h3>Мои записи</h3>
                    <AddNewPostForm onSubmit={onAddPost}/>
                </div>
                : <h3>Записи</h3>
            }
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
});

export default MyPosts;