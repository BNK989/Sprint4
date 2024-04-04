import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { gigService } from "../services/gig.service.local";


export function GigDetails() {
    const { gigId } = useParams()
    const navigate = useNavigate()
    const [gig, setGig] = useState(null)

    useEffect(() => {
        loadToy()
        
    }, [gigId])


    async function loadToy() {
        try {
            const gig = await gigService.getById(gigId)
            console.log('gig:', gig)
            setGig(gig)
        } catch (err) {
            console.log('Had issues in gig details', err)
            showErrorMsg('Cannot load gig')
            navigate('/explore')
        }
    }
}