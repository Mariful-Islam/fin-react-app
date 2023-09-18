import React from 'react'

const createProfile = () => {
  return (
    <div>
        <h2>Create Profile</h2>
        <form>
            <input type="text" name="address" />
            <input type="text" name="bio" />
            <input type="submit" value="Create" />
        </form>
    </div>
  )
}

export default createProfile