// import Card from ‘../ui/Card’;
// import classes from ‘./NewMeetupForm.module.css’;
// import { useRef } from ‘react’;
// function NewMeetupForm(props) {
//     const artistInputRef = useRef();
//     const albumInputRef = useRef();
//     const yearInputRef = useRef();
//     // const descriptionInputRef = useRef();
//     function submitHandler(event) {
//         event.preventDefault();
//         const enteredArtist = artistInputRef.current.value;
//         const enteredAlbum = albumInputRef.current.value;
//         const enteredYear = yearInputRef.current.value;
//         // const enteredDescription = descriptionInputRef.current.value;
//         const meetupData = {
//             artist: enteredArtist,
//             image: enteredAlbum,
//             address: enteredYear,
//             // description: enteredDescription
//         };
//         console.log(meetupData);
//         props.onMeetupAdd(meetupData);
//     }
//     return (
//         <Card>
//             <form className={classes.form} onSubmit={submitHandler}>
//                 <div className={classes.control}>
//                     <label htmlFor=‘title’>Artist</label>
//                     <input type=“text” required id=“artist” ref={artistInputRef} />
//                 </div>
//                 <div className={classes.control}>
//                     <label htmlFor=‘image’>Album</label>
//                     <input type=“text” required id=“album” ref={albumInputRef} />
//                 </div>
//                 <div className={classes.control}>
//                     <label htmlFor=‘address’>Year</label>
//                     <input type=“text” required id=“address” ref={yearInputRef} />
//                 </div>
//                 {/* <div className={classes.control}>
//                     <label htmlFor=‘description’>Meetup Description</label>
//                     <textarea id=“description” required rows=‘5’ ref={descriptionInputRef}></textarea>
//                 </div> */}
//                 <div className={classes.actions}>
//                     <button>Add Record</button>
//                 </div>
//             </form>
//         </Card>
//     );
// }
// export default NewMeetupForm;
