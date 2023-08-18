using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace FormApi.Controllers
{
    [ApiController]
    [Route("api/form")]
    public class FormController : ControllerBase
    {
        private readonly ILogger<FormController> _logger;

        public FormController(ILogger<FormController> logger)
        {
            _logger = logger;
        }

        [HttpPost("submitform")]
        public async Task<IActionResult> SubmitForm([FromBody] FormData formData)
        {
            try
            {
                // Validate the form data
                if (formData == null || string.IsNullOrEmpty(formData.Name) || string.IsNullOrEmpty(formData.Email) || string.IsNullOrEmpty(formData.Subject) || string.IsNullOrEmpty(formData.Message))
                {
                    return BadRequest("Invalid form data");
                }

                // Process the form data
                // For example, send an email, save to database, etc.
                // await _formService.ProcessFormDataAsync(formData);

                // Return a success response
                return Ok("Form submitted successfully");
            }
            catch (Exception ex)
            {
                // Log the error
                _logger.LogError(ex, "Error submitting form");

                // Return a failure response
                return StatusCode(500, "Internal server error");
            }
        }
    }

    public class FormData
    {
        public string Name { get; set; }
        public string Email { get; set; }
        public string Subject { get; set; }
        public string Message { get; set; }
    }
}
