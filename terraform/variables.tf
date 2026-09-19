variable "aws_region" {
  description = "AWS region"
  default     = "us-east-1"
}

variable "ami_id" {
  description = "AMI ID for EC2"
  type        = string
}

variable "instance_type" {
  description = "EC2 instance type"
  default     = "t3.micro"
}

variable "key_name" {
  description = "AWS EC2 Key Pair name"
  type        = string
}

variable "private_key_path" {
  description = "Path to private SSH key"
  type        = string
}