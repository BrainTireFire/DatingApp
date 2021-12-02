using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace API.Extensions
{
    public static class ClaimsPrincipleExtensions
    {
        public static string GetUsername(this ClaimsPrincipal user)
        {
            //we should get here username form the token which user authentyteit
            return user.FindFirst(ClaimTypes.NameIdentifier)?.Value;
        }
    }
}