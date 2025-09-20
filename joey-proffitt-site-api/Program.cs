using joey_proffitt_site_api.Data;
using joey_proffitt_site_api.Interfaces;
using joey_proffitt_site_api.Repositories;
using Microsoft.EntityFrameworkCore;
using System;
using System.Text.Json.Serialization;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers()
    .AddJsonOptions(o =>
    {
        o.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.IgnoreCycles;
    });
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Register DbContext
builder.Services.AddDbContext<JoeyProffittDbContext>(options =>
    options.UseSqlServer(
        builder.Configuration.GetConnectionString("JoeyProffittDbContext"),
        sqlOptions => sqlOptions.EnableRetryOnFailure(
            maxRetryCount: 5,               // how many retries
            maxRetryDelay: TimeSpan.FromSeconds(10), // wait time between retries
            errorNumbersToAdd: null         // can leave null for default transient errors
        )
    )
);

builder.Services.AddScoped<ISkillCategoryRepository, SkillCategoryRepository>();

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend", policy =>
    {
        policy.WithOrigins("http://localhost:5173") // adjust if needed
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});



var app = builder.Build();



app.UseSwagger();
app.UseSwaggerUI();

app.UseHttpsRedirection();

app.UseAuthorization();
app.UseCors("AllowFrontend");
app.MapControllers();

app.Run();
