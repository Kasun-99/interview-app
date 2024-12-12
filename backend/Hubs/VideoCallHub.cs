using Microsoft.AspNetCore.SignalR;
using System.Threading.Tasks;

public class VideoCallHub : Hub
{
    public async Task JoinMeeting(string meetingId, string userId)
    {
        await Groups.AddToGroupAsync(Context.ConnectionId, meetingId);
        await Clients.Group(meetingId).SendAsync("UserJoined", userId);
    }

    public async Task LeaveMeeting(string meetingId, string userId)
    {
        await Groups.RemoveFromGroupAsync(Context.ConnectionId, meetingId);
        await Clients.Group(meetingId).SendAsync("UserLeft", userId);
    }

    public async Task SendSignal(string meetingId, string userId, object signalData)
    {
        await Clients.Group(meetingId).SendAsync("ReceiveSignal", userId, signalData);
    }
}
