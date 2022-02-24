import React from 'react'
import { Actions } from './Actions'
import { Container } from './Container'
import HeroBackground from '../../public/svg/hero-background.svg'

export function HeroBlock({ data, index }) {
  return (
    <>
      <section key={index} className="hero">
        <Container width="narrow" center>
          <HeroFeature item={data} />
        </Container>
        {data.videoSrc && (
          <Container>
            <Video src={data.videoSrc} />
          </Container>
        )}
        <div className="background">
          <HeroBackground />
        </div>
      </section>
      <style jsx>{`
        .hero {
          position: relative;
          z-index: 2;
        }

        .background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 66.6%;
          z-index: -1;

          :global(svg) {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
          }
        }
      `}</style>
    </>
  )
}

export const HeroFeature = ({ item }) => {
  return (
    <>
      <div className="feature">
        {item.headline && <h2 className="heading">{item.headline}</h2>}
        {item.subline && <p className="textHuge">{item.subline}</p>}
        {item.actions && <Actions items={item.actions} align="center" />}
      </div>
      <style jsx>{`
        .feature {
          padding: 4rem 0 7rem 0;
        }

        .heading {
          font-family: var(--font-tuner);
          font-weight: bold;
          font-size: 3.125rem;
          line-height: 1.4;
          display: inline-block;
          color: transparent;
          background: linear-gradient(
            to right,
            var(--color-orange-light),
            var(--color-orange),
            var(--color-orange-dark)
          );
          -webkit-background-clip: text;
          background-clip: text;

          &:not(:last-child) {
            margin-bottom: 2.5rem;
          }
        }
      `}</style>
    </>
  )
}

export const Video = ({ src }) => {
  return (
    <>
      <video
        className="video"
        autoPlay={true}
        loop
        muted
        playsInline
        poster={`https://res.cloudinary.com/forestry-demo/video/upload/so_0/${src}.jpg`}
      >
        <source
          src={`https://res.cloudinary.com/forestry-demo/video/upload/q_100,h_584/${src}.webm`}
          type="video/webm"
        />
        <source
          src={`https://res.cloudinary.com/forestry-demo/video/upload/q_80,h_584/${src}.mp4`}
          type="video/mp4"
        />
      </video>
      <style jsx>{`
        .video {
          width: 100%;
          border-radius: 0.5rem;
          box-shadow: inset 0 0 0 1px rgba(236, 72, 21, 0.03),
            0 6px 24px rgba(0, 37, 91, 0.05), 0 2px 4px rgba(0, 37, 91, 0.03);
          display: flex;
          justify-content: center;

          @media (min-width: 1100px) {
            width: 90%;
            margin: 0 auto;
          }

          @media (min-width: 1400px) {
            width: 80%;
          }
        }
      `}</style>
    </>
  )
}
