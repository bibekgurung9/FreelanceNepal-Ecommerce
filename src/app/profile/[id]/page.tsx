export default function UserProfile({params}: any){
    
    return(
        <div>
            <h1 className="text-4xl">Profile Page</h1>
            <p>This is your profile page here</p>
            <span>Hello {params.id.toUpperCase()}</span>
        </div>
    )
}