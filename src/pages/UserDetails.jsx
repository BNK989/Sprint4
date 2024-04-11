import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { loadUser } from '../store/actions/user.actions'
import { gigService } from '../services/gig.service.local'
import { loadOwnGigs } from '../store/actions/gig.actions'
import { OwnedGigPreview } from '../cmps/OwnedGigPreview'
import { ManageReceivedOrders } from '@/cmps/ManageReceivedOrders'
import { ManageSentOrders } from '@/cmps/ManageSentOrders'
import { QuickAvatar } from '@/cmps/shanCN/QuickAvatar'



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
  return (
    // <section className='all full'>
    <section className='user-details-seller-container main-container'>
      <section className='profile-main-container'>

        {
          user && <section className="user-container">

            <section className="user-details-seller">
              <QuickAvatar user={user} className="user-image aspect-square h-40 w-40 flex-center" />
              <span className='user-name'> @{user.username}</span>

              <div className='line'></div>

              <div className='details'>
                <p className='from'>
                  <div>
                    <span className="location">
                      <svg width="12" height="13" viewBox="0 0 12 16" fill='#74767e' xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path d="M5.38338 15.6772C0.842813 9.09472 0 8.41916 0 6C0 2.68628 2.68628 0 6 0C9.31372 0 12 2.68628 12 6C12 8.41916 11.1572 9.09472 6.61662 15.6772C6.31866 16.1076 5.68131 16.1076 5.38338 15.6772ZM6 8.5C7.38072 8.5 8.5 7.38072 8.5 6C8.5 4.61928 7.38072 3.5 6 3.5C4.61928 3.5 3.5 4.61928 3.5 6C3.5 7.38072 4.61928 8.5 6 8.5Z"></path></g><defs><clipPath id="clip0"><rect width="12" height="16"></rect></clipPath></defs></svg>
                    </span>
                    {/* <span className="fa location"></span> */}
                    <span>From</span>
                  </div>

                  <span>{user.from}</span>
                </p>

                <p className='member-since'>
                  <div>
                    <span className='since'>
                      <svg width="13" height="13" viewBox="0 0 14 16" fill='#74767e' xmlns="http://www.w3.org/2000/svg"><path d="M7 8C9.20938 8 11 6.20937 11 4C11 1.79063 9.20938 0 7 0C4.79063 0 3 1.79063 3 4C3 6.20937 4.79063 8 7 8ZM9.8 9H9.27812C8.58437 9.31875 7.8125 9.5 7 9.5C6.1875 9.5 5.41875 9.31875 4.72188 9H4.2C1.88125 9 0 10.8813 0 13.2V14.5C0 15.3281 0.671875 16 1.5 16H12.5C13.3281 16 14 15.3281 14 14.5V13.2C14 10.8813 12.1187 9 9.8 9Z"></path></svg>
                    </span>
                    <span>Member since</span>
                  </div>

                  <span>{user.Membersince}</span>
                </p>
              </div>

            </section>
          </section>
        }
        <section className='gigs'>
          {
            <ul className='owned-gigs-container clean-list'>
                <Link className=' w-full add-new-gig cursor-pointer' to='/manage_gigs/new'>
              <li className='add-new-gig-container'>
                
                {/* <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT-aRZyzNggfpR9_ncdjTOoPVirlRm6n0O020q41dCXjYk4jVAL" alt="" /> */}
                <p>Create new gig</p>
              </li>
                </Link>
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
      </section>

    </section>
    // </section>
  )
}