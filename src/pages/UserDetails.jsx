import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { loadUser } from '../store/actions/user.actions'
import { gigService } from '../services/gig.service.local'
import { loadOwnGigs } from '../store/actions/gig.actions'
import { OwnedGigPreview } from '../cmps/OwnedGigPreview'
import { ManageReceivedOrders } from '@/cmps/ManageReceivedOrders'
import { ManageSentOrders } from '@/cmps/ManageSentOrders'



// import { store } from '../store/store'
// import { showSuccessMsg } from '../services/event-bus.service'
// import { socketService, SOCKET_EVENT_USER_UPDATED, SOCKET_EMIT_USER_WATCH } from '../services/socket.service'
// import { utilService } from '../services/util.service'

export function UserDetails() {

  const params = useParams()
  const user = useSelector(storeState => storeState.userModule.user)
  const ownedGigs = useSelector(storeState => storeState.gigModule.ownedGigs)

  useEffect(() => {
    loadUser(params.userId)
    loadOwnGigs(params.userId)

    // gigService.query(params.id)
    // socketService.emit(SOCKET_EMIT_USER_WATCH, params.id)
    // socketService.on(SOCKET_EVENT_USER_UPDATED, onUserUpdate)

    // return () => {
    //   socketService.off(SOCKET_EVENT_USER_UPDATED, onUserUpdate)
    // }

  }, [params.userId])

  // function onUserUpdate(user) {
  //   showSuccessMsg(`This user ${user.fullname} just got updated from socket, new score: ${user.score}`)
  //   store.dispatch({ type: 'SET_WATCHED_USER', user })
  // }
  return (<section className='user-details-seller-container'>
    {
      user && <section className="user-container">
        <section className="user-details-seller">
          <img src={user.imgUrl} style={{ width: '100px' }} />
          <h3>{user.fullname}</h3>

          {/* <i className="fa location"></i> */}
          <p><span className="fa location"></span> Country:</p>
        </section>


        <article className='user-description-seller'>
          <h2>Description:</h2>
          <p>kadfdf iuadhf uioh ouahf iuh daufhluj  aoiuhafp8ihas uihasdf iuah dasiuh </p>
        </article>
      </section>


    }

    {

      <ul className='owned-gigs-container clean-list'>
        <li className='add-new-gig-container'>
          <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT-aRZyzNggfpR9_ncdjTOoPVirlRm6n0O020q41dCXjYk4jVAL" alt="" />
          <p>Create new gig</p>
        </li>
        {
          !!ownedGigs.length && ownedGigs.map(ownedGig => {
            return <li className='owned-gigs-preview' key={ownedGig._id}>
              <OwnedGigPreview ownedGig={ownedGig} />
            </li>
          })
        }
      </ul>
    }
    {
      user && <section className='manege-order-container'>
        <ManageReceivedOrders user={user} />
        <ManageSentOrders user={user} />
      </section>
    }
  </section>



  )
}