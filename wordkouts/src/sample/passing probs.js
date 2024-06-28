import React from 'react'

function ProbsSample(probs) {
    const user=false;
  return (
    <div>
      hey {probs.details.name} how are you{probs.details.age} ??

      <p>
      {user ? <p>hey</p> : <p>nice</p>}
      </p>

    </div>
  )
}

export default ProbsSample;
