import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { loadUser } from '../store/actions/user.actions'
import { gigService } from '../services/gig.service.local'
import { loadOwnGigs } from '../store/actions/gig.actions'
import { OwnedGigPreview } from '../cmps/OwnedGigPreview'


// import { store } from '../store/store'
// import { showSuccessMsg } from '../services/event-bus.service'
// import { socketService, SOCKET_EVENT_USER_UPDATED, SOCKET_EMIT_USER_WATCH } from '../services/socket.service'
// import { utilService } from '../services/util.service'

export function UserDetails() {

  const params = useParams()
  const user = useSelector(storeState => storeState.userModule.user)
  const ownedGigs = useSelector(storeState => storeState.gigModule.ownedGigs)
  console.log('params.id:', params.id)
  useEffect(() => {
    // loadUser(params.id)
    loadOwnGigs(params.id)
    // gigService.query(params.id)
    // socketService.emit(SOCKET_EMIT_USER_WATCH, params.id)
    // socketService.on(SOCKET_EVENT_USER_UPDATED, onUserUpdate)

    // return () => {
    //   socketService.off(SOCKET_EVENT_USER_UPDATED, onUserUpdate)
    // }

  }, [params.id])
  console.log('user:', user)
  console.log('ownedGigs:', ownedGigs)
  // function onUserUpdate(user) {
  //   showSuccessMsg(`This user ${user.fullname} just got updated from socket, new score: ${user.score}`)
  //   store.dispatch({ type: 'SET_WATCHED_USER', user })
  // }

  return (<>
    <section className="user-details">
      <h1>User Details</h1>
      {user && <div>
        <h3>
          {user.fullname}
        </h3>
        <img src={user.imgUrl} style={{ width: '100px' }} />
        {/* <pre> {JSON.stringify(user, null, 2)} </pre> */}
      </div>}
    </section>
    {
       
          <ul className='owned-gigs-container clean-list'>
          {
        !!ownedGigs.length && ownedGigs.map(ownedGig =>{
             return <li className='owned-gigs-preview' key={ownedGig._id}>
                <OwnedGigPreview ownedGig={ownedGig}/>
              </li>
            })
          }
          </ul>
      
    }
  </>

  )
}