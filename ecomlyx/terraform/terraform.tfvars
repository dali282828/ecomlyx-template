# terraform/terraform.tfvars
project_id = "my-project-45125-dali"
region     = "us-central1"
database_tier = "db-custom-1-3840"
wordpress_image = "gcr.io/${var.project_id}/ecomlyx-wordpress:latest"
