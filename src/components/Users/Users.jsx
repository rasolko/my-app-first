import React from 'react';
import userPhoto from '../../img/ava.jpg';
import s from './Users.module.css';
const Users = (props) => {
    let totalPageCount = Math.ceil(props.totalUsers / props.pageCount);
    let usersPage = [];
    for (let i = 1; i <= totalPageCount; i++) {
        usersPage.push(i);
    }
    return (
        <div>
            {usersPage.map((p) => {
                return <span className={props.page === p && s.page}
                    onClick={() => { props.getUsers(p) }}
                >{p}</span>
            })}
            {props.users.map((u) => {
                return (
                    <div key={u.id}>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    props.unfollow(u.id);
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    props.follow(u.id);
                                }}>Follow</button>}
                        </div>
                        <div>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} />
                        </div>
                        <div>
                            <p>{u.name}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    )
}
export default Users;