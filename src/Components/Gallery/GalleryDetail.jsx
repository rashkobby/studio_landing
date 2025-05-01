import React from 'react'
import { useParams } from 'react-router-dom'
import GalleryService from './GalleryService'
import Layout from '../Layout'

const GalleryDetail = () => {
  const {service} = useParams()
  console.log(service)
  return (
        <Layout>
            <GalleryService serviceName={service}/>
        </Layout>
  )
}

export default GalleryDetail