using FormApi.Models;

public void ConfigureServices(IServiceCollection services)
{
    // Register the database context class as a service
    services.AddDbContext<ContactsContext>(options =>
        options.UseSqlServer(Configuration.GetConnectionString("Default")));

    // Register the identity service with default options
    services.AddDefaultIdentity<IdentityUser>(options => options.SignIn.RequireConfirmedAccount = true)
        .AddEntityFrameworkStores<ContactsContext>();

    // Register the MVC service with default options
    services.AddControllersWithViews();

    // Register the Razor Pages service with default options
    services.AddRazorPages();
}
